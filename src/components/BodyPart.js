import { Stack, Typography } from '@mui/material'
import { bodyPartIcons } from '../utils/bodyPartIcons'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const iconSrc = bodyPartIcons[item] || 'default-icon.png' // Use default icon if none found

    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #b616f6' : '',
                background: '#fff',
                borderRadius: '10px',
                width: '150px',
                height: '172px',
                cursor: 'pointer',
                gap: '20px',
                '&:hover': {
                    borderRadius: '10px', // Ensure border radius remains the same on hover
                    background: '#f5f5f5',
                    transform: 'scale(1.3)',
                },
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={iconSrc} alt={item} style={{ width: '50px', height: '50px' }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Nunito" color="#3A1212" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart
