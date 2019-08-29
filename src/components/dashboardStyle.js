import styled from 'styled-components';

const DashboardStyle = styled.div`


    display: flex;
    flex-direction: column;

    .dash_caption{
        width : 50vw;
    }

    .flex_container{
        display: flex;
        align-items   : baseline;
    }

    .input_style{
        width : 50vw;
    }

    .button_container{
        display:flex;
        justify-content : space-around;
    }

`

export {
    DashboardStyle
}
