/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: eslint errors 

import "./card.scss";

 function FilterCard({ top, left }: { top: number; left: number }) {
  return <div
    className="filter-card-container"
    style={{ top:`${top}px`, left: `${left}px` }}
  >
    <form className="flex-container">
      <div className="form-fields">
        <div className="form-field-item">
          <label htmlFor="organization">Organization</label>
          <select name="" id="">
            <option value="">Select</option>
          </select>
        </div>
        <div className="form-field-item">
          <label htmlFor="username">Username</label>
          <input placeholder="User" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="email">Email</label>
          <input placeholder="Email" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="date">Date</label>
          <input placeholder="Date" type="date" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="phone number">Phone Number </label>
          <input placeholder="Phone Number" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="Status">Status </label>
          <select name="" id="">
            <option value="">Select</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
      </div>
      <div className="form-field-btn-group">
        <button type="submit" className="btn outline">Reset</button>
        <button type="submit" className="btn filled">Filter</button>
      </div>
    </form>
  </div>
}

export default FilterCard;
