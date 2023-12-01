import Section from "./Section";

export default function Tabs({ children, buttons, ButtonsContainer = Section }) {

    // buttons can be jsx code
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}