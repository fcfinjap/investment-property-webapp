import React, { useState } from "react";
import { Table, NavLink } from "react-bootstrap";

const PropertyTable = props => {
    let header = [
        "ID", 
        "Date Added", 
        "Address Line 1", 
        "Address Line 2", 
        "City", 
        "State",
        "Zip Code",
        "Categories",
        "List Price",
        "Source"
    ]
    const { properties } = props;

    return (
        <Table
            variant="dark"
            striped
            bordered
            responsive
            hover
        >
            <thead>
                <tr key="header">
                    {header.map(heading => {
                        return <td key={heading} header={heading}>{heading}</td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {properties.map(property => {
                    return (
                        <tr key={property.id}>
                            <td key="id">{property.id}</td>
                            <td key="added_date">{property.added_date}</td>
                            <td key="address_1">{property.address_1}</td>
                            <td key="address_2">{property.address_2}</td>
                            <td key="city">{property.city}</td>
                            <td key="state">{property.state}</td>
                            <td key="zip_code">{property.zip_code}</td>
                            <td key="categories">{property.categories}</td>
                            <td key="list_price">{property.list_price}</td>
                            <td key="source_url">{property.source_url}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default PropertyTable;