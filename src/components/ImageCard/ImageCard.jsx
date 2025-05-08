import css from "./ImageCard.module.css";
export default function ImageCard({ imageData }) {
  return (
    <div className={css.imageCard}>
      <img
        className={css.imageData}
        src={imageData.urls.small}
        alt={imageData.alt_description || "Unsplash Image"}
      />
    </div>
  );
}
