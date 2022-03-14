import Image from "next/image";
import Card from '@mui/material/Card'

const Noppa = (props) => {
    if (!props.number) {
        return (
            <></>
        )
    }

    const src = `/dice-${props.number}.svg`
    return (
        <Card raised sx={{ padding: 2 }}>
            <Image src={src} alt="Dice" width={100} height={100} />
        </Card>
    )
}

export default Noppa