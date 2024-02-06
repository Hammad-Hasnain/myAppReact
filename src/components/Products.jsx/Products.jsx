import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/slices/productsSlice'
import { Box, Stack, Typography } from '@mui/material'
import Button from '../button/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from '../nav/Navbar'
import loading from '../../assets/gif/loading.gif'



const Products = () => {
    const selector = useSelector(state => state.productsReducer)
    console.log('selector===>', selector)
    console.log('selector===>', selector.isLoading)

    const PRODS_DATA = selector.productsData
    console.log(PRODS_DATA)



    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchData())
    }, [])

    let check = true;

    return (



        !selector.isLoading ?
            <>
                <Navbar />
                <Typography sx={{ fontSize: "4em", fontWeight: 'bold', pt: 5, textAlign: 'center', fontFamily: 'Times New Roman' }}>Products</Typography>

                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'center', }}>
                    {
                        PRODS_DATA.map((e, i) => <Box key={i} sx={{
                            // border: '2px solid black',
                            maxWidth: '300px',
                            borderRadius: '7px', overflow: 'hidden',
                            boxShadow: '0 0 10px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'space-between'
                        }}>
                            <div style={{ margin: 'auto' }}>
                                <img src={e.image}
                                    width={'100%'} alt="" />
                            </div>

                            {/* border helps to this BOX to take rest of the height */}
                            <Box sx={{ p: 1, justifyContent: 'space-between' }}>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    borderBottom: '1px solid #808080', marginBottom: '15px'
                                }}>
                                    <Typography sx={{ fontSize: '1.4em' }}>{e.title.slice(0, 15)}
                                        <span style={{ cursor: 'pointer' }}>...</span></Typography>

                                    <FavoriteBorderIcon sx={{ color: 'red' }} />

                                </div>
                                <div>
                                    <Typography sx={{ textTransform: 'capitalize' }}>{e.description.slice(0, 120)}
                                        <span style={{ cursor: 'pointer' }}>...</span></Typography>
                                </div>
                                <div>
                                    <Typography>Price: {e.price}$</Typography>
                                </div>

                                <Box sx={{ textAlign: "end", }}>
                                    <Button />
                                </Box>
                            </Box>
                        </Box>)
                    }







                </Stack>



            </> : <Box sx={{ textAlign: 'center', marginTop: '4em' }}>
                <img src={loading} alt="Loading..." width={'50px'} />
            </Box>






    )
}

export default Products