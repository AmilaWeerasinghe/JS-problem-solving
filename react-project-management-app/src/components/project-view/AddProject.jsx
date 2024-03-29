import {useRef} from 'react';
import Input from "../Input";
import Modal from '../Modal';

const AddProject = ({onSave, onCancel})=>{
    const title = useRef();
    const description = useRef();
    const dueDate= useRef();
    const ModalRef = useRef();

    const handleSave = () => {
       const enteredTitle = title.current.value;
       const enteredDescription = description.current.value;
       const enteredDueDate = dueDate.current.value;

       if (enteredTitle.trim()=== '' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
        ModalRef.current.open();
        return;
       }

       //validations
       onSave(enteredTitle,enteredDescription,enteredDueDate);
    }

    const handleCancel = () => {
        onCancel();
    }

    return(
        <>
        <Modal ref={ModalRef} buttonCaption='Close'>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>oops...looks like you forgot to input value</p>
            <p className='text-stone-600 mb-4'>Please make sure to input values for all input fields</p> 
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">
                    Cancel
                    </button>
                </li>
                <li>
                    <button onClick={handleSave}
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type='text' ref={title} label='Title' />
                <Input ref={description} label='Description' isTextArea/>
                <Input type='date' ref={dueDate} label='Due Date' />
        </div>
        </div>
       </>
    )
}

export default AddProject;