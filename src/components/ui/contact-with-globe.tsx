import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Headphones, ArrowRight } from "lucide-react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
  GeometryObject,
} from "topojson-specification";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const typewriterFont = "'Courier New', Courier, monospace";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "info@haastsolution.com",
    href: "mailto:info@haastsolution.com",
  },
  { icon: Phone, label: "+91 62675 17874", href: "tel:+916267517874" },
  {
    icon: Headphones,
    label: "support@haastsolution.com",
    href: "mailto:info@haastsolution.com",
  },
];

interface GeoFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection;
  };
}

interface GlobeWorldProps {
  width?: number;
  height?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  initialRotation?: [number, number];
  enableInteraction?: boolean;
}

function GlobeWorld({
  width,
  height,
  autoRotate = true,
  autoRotateSpeed = 0.3,
  initialRotation = [0, -20],
  enableInteraction = true,
}: GlobeWorldProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState<[number, number]>(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrame = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);

  const useResponsive = !width && !height;
  const finalWidth = useResponsive ? dimensions.width : width || 800;
  const finalHeight = useResponsive ? dimensions.height : height || 500;

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const updateDimensions = () => {
      if (container && useResponsive) {
        const w = container.offsetWidth || 300;
        setDimensions({ width: w, height: w });
      }
    };

    updateDimensions();

    if (useResponsive) {
      resizeObserver.current = new ResizeObserver(updateDimensions);
      resizeObserver.current.observe(container);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      if (resizeObserver.current) resizeObserver.current.disconnect();
      observer.unobserve(container);
    };
  }, [useResponsive]);

  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        );
        const world = (await response.json()) as WorldAtlasTopology;
        const countries = feature(world, world.objects.countries)
          .features as GeoFeature[];
        setWorldData(countries);
      } catch (error) {
        console.error("Error loading world data:", error);
      }
    };
    loadWorldData();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isVisible || isDragging) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }

    const rotate = () => {
      setRotation((prev) => [(prev[0] + autoRotateSpeed) % 360, prev[1]]);
      animationFrame.current = requestAnimationFrame(rotate);
    };

    animationFrame.current = requestAnimationFrame(rotate);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [autoRotate, autoRotateSpeed, isVisible, isDragging]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !enableInteraction) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    setRotation((prev) => [
      prev[0] + dx * 0.4,
      Math.max(-90, Math.min(90, prev[1] - dy * 0.4)),
    ]);

    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  useEffect(() => {
    if (!svgRef.current || !isVisible || worldData.length === 0) return;
    if (useResponsive && dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3
      .geoOrthographic()
      .scale((Math.min(finalWidth, finalHeight) / 2) * 0.9)
      .translate([finalWidth / 2, finalHeight / 2])
      .rotate([rotation[0], rotation[1]])
      .precision(0.1);

    const path = d3.geoPath().projection(projection);

    // 1. Ocean Background Sphere
    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "rgba(21, 21, 20, 0.04)")
          .attr("stroke", "#151514")
          .attr("stroke-width", 1.2)
          .attr("opacity", 0.7);
      }
    } catch (e) {
      console.error(e);
    }

    // 2. Graticule Lines (Ocean Grid)
    try {
      const graticule = d3.geoGraticule();
      svg
        .append("path")
        .datum(graticule())
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#151514")
        .attr("stroke-width", 0.4)
        .attr("opacity", 0.06);
    } catch (e) {
      console.error(e);
    }

    // 3. Landmass without individual country borders (stroke set to none)
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d: GeoFeature) => {
        try {
          const pathString = path(d as unknown as Parameters<typeof path>[0]);
          if (!pathString || pathString.includes("NaN")) return "";
          return pathString;
        } catch {
          return "";
        }
      })
      .attr("fill", "rgba(21, 21, 20, 0.12)")
      .attr("stroke", "none")
      .attr("opacity", 0.85);
  }, [
    worldData,
    rotation,
    isVisible,
    finalWidth,
    finalHeight,
    useResponsive,
    dimensions.width,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
      }}
    >
      <svg
        ref={svgRef}
        width={finalWidth}
        height={finalHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "100%",
          cursor: enableInteraction ? (isDragging ? "grabbing" : "grab") : "default",
          opacity: dimensions.width > 0 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}

interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function ContactWithGlobe({
  title = "Contact us",
  subtitle = "Contact",
  description = "We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.",
}: ContactWithGlobeProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#ebe9e5",
        overflow: "hidden",
        padding: "80px var(--page-gutter)",
        fontFamily: typewriterFont,
      }}
    >
      <div style={{ width: "100%" }}>
        
        {/* Header Heading & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(224, 79, 50, 0.1)",
              border: "1px solid rgba(224, 79, 50, 0.3)",
            }}
          >
            <span style={{ fontSize: "13px", color: "#e04f32", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: typewriterFont }}>
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: "700",
              fontFamily: typewriterFont,
              color: "#151514",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            style={{
              fontSize: "15px",
              fontFamily: typewriterFont,
              color: "rgba(21, 21, 20, 0.75)",
              maxWidth: "480px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Left Column: Contact Links & Globe without borders */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: smoothEase }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", fontFamily: typewriterFont, color: "#151514", margin: 0 }}>
                Get in touch
              </h3>
              <p style={{ fontSize: "14px", fontFamily: typewriterFont, color: "rgba(21, 21, 20, 0.65)", lineHeight: "1.6", margin: 0 }}>
                Reach out via any channel below. We typically reply within one business day.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {CONTACT_LINKS.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: smoothEase }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    color: "rgba(21, 21, 20, 0.75)",
                    fontSize: "14px",
                    fontFamily: typewriterFont,
                    fontWeight: "600",
                    width: "fit-content",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#151514")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(21, 21, 20, 0.75)")}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(21, 21, 20, 0.04)",
                      border: "1px solid rgba(21, 21, 20, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#151514",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "16px", height: "16px", strokeWidth: "2px" }} />
                  </div>
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Globe Section */}
            <div
              style={{
                position: "relative",
                width: "100%",
                padding: 0,
                marginTop: "10px",
              }}
            >
              <GlobeWorld autoRotate autoRotateSpeed={0.3} />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.35, ease: smoothEase }}
            style={{
              backgroundColor: "#111113",
              borderRadius: "20px",
              padding: "40px",
              color: "#fafafa",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontFamily: typewriterFont,
            }}
          >
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", fontFamily: typewriterFont, color: "#fafafa", margin: "0 0 4px 0" }}>
                Send a message
              </h3>
              <p style={{ fontSize: "13.5px", fontFamily: typewriterFont, color: "rgba(255, 255, 255, 0.6)", margin: 0 }}>
                Fill out the form and we'll get back to you promptly.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", fontFamily: typewriterFont, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontFamily: typewriterFont,
                    color: "#fafafa",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", fontFamily: typewriterFont, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)" }}>
                  Company
                </label>
                <input
                  type="text"
                  placeholder=""
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontFamily: typewriterFont,
                    color: "#fafafa",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", fontFamily: typewriterFont, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=""
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontFamily: typewriterFont,
                    color: "#fafafa",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", fontFamily: typewriterFont, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)" }}>
                  Message
                </label>
                <textarea
                  placeholder=""
                  rows={4}
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontFamily: typewriterFont,
                    color: "#fafafa",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "fit-content",
                height: "44px",
                padding: "0 24px",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "14px",
                fontFamily: typewriterFont,
                backgroundColor: "#fafafa",
                color: "#111113",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04f32")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
            >
              Submit
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}