function Product(props){
    const title=props.product.title;
    const price=props.product.price;

    return (
            <div class="col-3 flex-shrink-0 card rounded-0 text-center p-0 border-0 text-light fw-bold lh-lg flex-grow-1">
              <div class="card-header rounded-0 bg-secondary border-0 fs-5">
                <p class="card-text">{title}</p>
               </div>
              <div class="card-body bg-info fs-6 lh-lg">
               <p class="card-text">nuo <span class="fs-2">{price}</span> EUR / mėn</p>
                </div>
            </div>
            )

}
export default Product