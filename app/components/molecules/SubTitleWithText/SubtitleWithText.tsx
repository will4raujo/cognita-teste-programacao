import "./SubtitleWithText.css";
import H2 from "../../atoms/H2/H2";
import Paragraph from "../../atoms/Paragraph/Paragraph";

interface SubtitleWithTextProps {
  subtitle: string;
  text?: string;
}

const SubtitleWithText = ({ subtitle, text }: SubtitleWithTextProps) => {
  return (
    <div className="subtitle-container">
      <H2>{subtitle}</H2>
      {text && (<Paragraph>{text}</Paragraph>)}
    </div>
  );
};

export default SubtitleWithText;