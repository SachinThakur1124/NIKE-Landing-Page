const ShoeCard = ({imgURL,changeBigShoeImage, bigShoeimg}) => {

    const handleClick = () => {
        if(bigShoeimg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeimg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>
     <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="Shoe Collection" 
        width={127}
        height={103}
        className="object-contai n"/>
     </div>
    </div>
  )
}

export default ShoeCard