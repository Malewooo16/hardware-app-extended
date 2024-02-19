import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import styles from "../page.module.css"

export default function StarsRatings (props) {
    const { value, onChange } = props
   
    return(
        <div className={styles.ratings}>
            <Rating name="read-only" value={value} precision={0.5} onClick={(evt) => onChange(evt)} readOnly={onChange == null} />
        </div>
    )
}