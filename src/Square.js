function Square() {
  return (
    <div className="Square d-flex border border-info">
      <img
        src="https://picsum.photos/300/200?random=1"
        alt="lorem"
        className="m-auto"
      />
      <div className="position-absolute m-auto d-flex flex-column justify-content-between">
        <div>a</div>
        <div>b</div>
      </div>
    </div>

    /* 
 for (let i=0;i<10;i++){
  console.log(i);
} */
  );
}

export default Square;
