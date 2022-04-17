function BgTop({img,content=null}) { 
  return (
    <div className="BgTop bg-cover text-center d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${img})` 
      }}>
         <h1 className="text-white h2 fw-bold text-shadow">{content}</h1>  
    </div>
  );
}

export default BgTop;