import styled from 'styled-components';

const DashboardStyle = styled.div`


    display: flex;
    flex-direction: column;
    padding : 10px;

    .dash_caption{
        width : 180px;
    }

    .flex_container{
        display: flex;
        align-items   : baseline;
        padding : 5px;
    }

    .input_style{
        width : 200px;
    }

    .button_container{
        display:flex;
        justify-content : space-around;
        padding : 5px;
    }

`

export {
    DashboardStyle
}
