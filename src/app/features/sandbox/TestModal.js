import ModalWrapper from '../../common/Modals/ModalWrapper';

export default function TestModal({data}) {
    return (
        <ModalWrapper size='mini' header='Test Modal'>
            <div>The data is: { data }</div>
        </ModalWrapper>
    )
}