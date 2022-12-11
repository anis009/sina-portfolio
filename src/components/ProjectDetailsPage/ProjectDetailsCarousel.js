import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetailsCarousel = ({ images }) => {
	console.log(images);
	return (
		<div className="w-[90%]  mx-auto pt-5 ">
			<Carousel autoPlay={true} infiniteLoop={true}>
				{images &&
					images?.map((image, id) => (
						<div className="h-[80vh]" key={id}>
							<img className="h-full rounded-md" src={image} alt="" />
						</div>
					))}
			</Carousel>
		</div>
	);
};

export default ProjectDetailsCarousel;
