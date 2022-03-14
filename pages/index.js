import Head from 'next/head'
import Bar from '../components/Bar'
import Noppa from '../components/Noppa'
import {useState} from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Random } from 'random-js'

export default function Home() {
    const [noppa, setNoppaState] = useState(null)
    const random = new Random()

    const throwDice = () => {
        const value = random.integer(1,6)
        setNoppaState(value)
    }

    return (
        <div>
            <Head>
                <title>Noppa</title>
                <meta name="description" content="Cool noppa gadget, right!?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Bar />
                <Toolbar />
                <Box sx={{ flexGrow: 1}}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Button variant="contained" onClick={throwDice}>Heitä noppaa</Button>
                        <Noppa number={noppa} />
                    </Stack>
                </Box>
            </main>
        </div>
    )
}
