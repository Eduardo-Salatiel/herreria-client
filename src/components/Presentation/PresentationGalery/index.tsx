import "./style.scss";

export const PresentationGalery = () => {
  return (
    <div className="presentation-galery">
      <div className="__item-1">
        <img src={'https://herreria.s3.us-east-2.amazonaws.com/barandales/3cba46ad-7b6c-4f04-a0d2-818588ae5c5b.jpeg'} alt="forja smc" />
      </div>
      <div className="__item-2">
        <img src={'https://herreria.s3.us-east-2.amazonaws.com/zaguanes/e7d60ccf-4dc5-4b80-b1fb-ab99d6982b79.jpeg'} alt="forja smc" />
      </div>
      <div className="__item-3">
        <img src={'https://herreria.s3.amazonaws.com/barandales/3f998a2a-801c-4947-a1bd-0fc2b9c13773.jpeg'} alt="forja smc" />
      </div>
    </div>
  );
};

export default PresentationGalery;
