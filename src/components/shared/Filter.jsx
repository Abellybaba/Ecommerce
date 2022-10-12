import React from 'react'

const Filter = () => {
  return (
    <div className='container bg-transparent'>
        <div className='row'>
        <h2 className="mb-16 mb-md-24 p-5 ">Best Sellers</h2>
            <div className="d-md-flex justify-content-between">
                <div className='d-flex align-items-center py-2'>
                    <span className='text-bold h6 me-2 text-nowrap text-center'>Filter Products: </span>
                      <select class="form-select me-3 form-select-sm" name="Color" id="">
                            <option selected disabled>Colors</option>
                            <option value="">White</option>
                            <option value="">Red</option>
                            <option value="">Black</option>
                            <option value="">Blue</option>
                            <option value="">Yellow</option>
                            <option value="">Green</option>
                        </select>
                        <select class="form-select form-select-sm" name="" id="">
                            <option selected disabled>Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                        </select>
                    
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='text-bold h6 me-2 text-nowrap'>Sort Products: </span>
                <select class="form-select form-select-sm" name="" id="">
                            <option selected>Newest</option>
                            <option value="">Price (asc)</option>
                            <option value="">Price (desc)</option>
                            
                        </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter