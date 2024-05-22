import React from 'react';

const roomsDetailsPage = ({params}) => {
    console.log(params.id);
    
    return (
        <div>
            Rooms Details page {params.id}
        </div>
    );
};

export default roomsDetailsPage;