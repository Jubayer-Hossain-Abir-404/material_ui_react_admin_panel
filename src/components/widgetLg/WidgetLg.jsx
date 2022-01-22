import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {

  // Here type is the props
  // Here a function is generated known as Button
  // type will be the argument here
  // type can be converged with the classname widgetLgButton
  const Button = ({type}) =>{
    // if no space is provided then it would be thought as
    // widgetLgButtobtype is a className
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return <div className="widgetLg">
      <h3 className="widgetLgTitle">
        Latest Transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            Customer
          </th>
          <th className="widgetLgTh">
            Date
          </th>
          <th className="widgetLgTh">
            Amount
          </th>
          <th className="widgetLgTh">
            Status
          </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" 
            className="widgetLgImg" />
            <span className="widgetLgName">
              Susan Carol
            </span>
          </td>
          <td className="widgetLgDate">
            22 Jan 2022
          </td>
          <td className="widgetLgAmount">
            $122.00
          </td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" 
            className="widgetLgImg" />
            <span className="widgetLgName">
              Susan Carol
            </span>
          </td>
          <td className="widgetLgDate">
            22 Jan 2022
          </td>
          <td className="widgetLgAmount">
            $122.00
          </td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" 
            className="widgetLgImg" />
            <span className="widgetLgName">
              Susan Carol
            </span>
          </td>
          <td className="widgetLgDate">
            22 Jan 2022
          </td>
          <td className="widgetLgAmount">
            $122.00
          </td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" 
            className="widgetLgImg" />
            <span className="widgetLgName">
              Susan Carol
            </span>
          </td>
          <td className="widgetLgDate">
            22 Jan 2022
          </td>
          <td className="widgetLgAmount">
            $122.00
          </td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
  </div>;
}
