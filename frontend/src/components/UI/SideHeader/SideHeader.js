import lakePhoto from './../../assets/maldives.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';

const SideHeader = () => {
    return (
        <section className="section-img">
            <FontAwesomeIcon
                icon={faCameraAlt}
                className={`fa-3x mx-1 icon-custom-style`}
            />
            <h2>Welcome to Paradise</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quos voluptates ullam velit, vero labore numquam? Sed ducimus
                obcaecati ut repellendus quas sint dolor suscipit praesentium,
                distinctio voluptatem quaerat pariatur?
            </p>
            <img src={lakePhoto} alt="" />
        </section>
    );
};

export default SideHeader;
