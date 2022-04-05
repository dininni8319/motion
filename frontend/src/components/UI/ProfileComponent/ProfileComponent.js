const ProfileComponent = ({ userProfile }) => {
    return ( 
        <section className="">
            <section>
                  <h2><span>{userProfile.first_name}</span> <span>{userProfile.last_name}</span></h2>
                  <p>{userProfile.description}</p>
            </section>

            <section>
                <ul>
                    <li>{userProfile.email}</li>
                    <li>{userProfile.city}</li>
                    <li>{userProfile.phone_number}</li>
                    <li>{userProfile.zip_code}</li>
                </ul>
            </section>
        </section>
     );
}
 
export default ProfileComponent;


// address: "Neumünsterstrasse 26"
// city: "Zürich"
// created_at: "2022-04-03T06:42:03.000000Z"
// description: "Write something about you..."
// email: "s.dininni@yahoo.com"
// first_name: "Salvatore"
// id: 1
// img: "assets/img/1649151523.png"
// last_name: "Dininni"
// phone_number: "+41762160203"
// updated_at: "2022-04-05T09:38:43.000000Z"
// zip_code: "8008"