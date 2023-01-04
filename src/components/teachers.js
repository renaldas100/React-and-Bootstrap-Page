function Teachers(props){
    const techersFirstName = props.teachers.FirstName;
    const techersLastName = props.teachers.LastName;
    const teacherProfession = props.teachers.Profession;
    const address = props.teachers.Address;
    const image = props.teachers.Image;

    return (
        <div class="col-5 card mb-3 flex-grow-1 rounded-1">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
                <img src={image} class="img-fluid rounded-start" alt="test"></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fw-bold">{techersFirstName}</span>{techersLastName}</h5>
                  <p class="card-text lh-1 my-1">{teacherProfession}</p>
                  <p class="card-text lh-1">{address}</p>
                </div>
              </div>
            </div>
          </div>
    )

}
export default Teachers