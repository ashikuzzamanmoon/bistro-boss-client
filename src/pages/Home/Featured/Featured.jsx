import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 26, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam pariatur reiciendis, voluptates explicabo asperiores blanditiis quo eaque, iusto suscipit placeat eius soluta. Tenetur delectus cupiditate excepturi consectetur omnis velit id libero nobis, amet voluptates culpa aperiam, eius tempora quasi maiores. Maiores laborum laudantium exercitationem eos voluptates animi excepturi quaerat.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;