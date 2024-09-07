import styles from "@/app/styles";


const FeaturesSection = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className="flex flex-row justify-between items-center w-full">
            <h1 className={`${styles.heading2}`}>Why Choose Us?</h1>
        </div>
    </section>
)

export default FeaturesSection;