import React from "react";
import DrawingCanvas from "./DrawingCanvas";

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  drawingPrompt: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  content,
  drawingPrompt,
}) => {
  return (
    <section
      id={id}
      className="mb-8 p-4 bg-[#1a1a2e] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#e94560]">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <DrawingCanvas prompt={drawingPrompt} />
    </section>
  );
};

export default ContentSection;
