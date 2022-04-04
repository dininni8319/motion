import lakePhoto from './../../assets/amalfi.png';
import { SectionContainerStyle } from './HeaderStyle';

const Header = () => {
    return ( 
        <SectionContainerStyle>
            <section className='section-header-image'>
              <img src={lakePhoto} alt="" className=''/>    
            </section>
        </SectionContainerStyle>
     );
}
 
export default Header;