import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

const Card = () => {
    const selector = useSelector(state => state.productsReducer)
    console.log(selector)


    return (

        <Box>
            <div>
                {/* <img src={ } alt="" /> */}
            </div>
        </Box>

    )
}

export default Card