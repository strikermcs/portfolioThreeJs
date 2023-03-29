import { styles } from "../../styles"

const SectionHeader = ({header, subText}) => {
  return (
    <>
        <p className={styles.sectionSubText}>{subText}</p>
        <h2 className={styles.sectionHeadText}>{header}</h2>
    </>
  )
}

export default SectionHeader