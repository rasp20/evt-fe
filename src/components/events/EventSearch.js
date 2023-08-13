import { useRef } from 'react';
import classes from "./event-search.module.css";
import Button from "../ui/Button";
import Select from 'react-select';
import { PROVINCE_OPTION_LIST, TIME_OPTION_LIST } from '../../common/constant'

function EventSearch(props) {
    const yearInputRef = useRef();
    const monthInputref = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputref.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Provinsi</label>
                    <Select options={PROVINCE_OPTION_LIST} styles={{
                        control: (baseStyles) => ({
                            ...baseStyles,
                            width: '12rem'
                        }),
                    }} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="time">Waktu</label>
                    <Select options={TIME_OPTION_LIST} styles={{
                        control: (baseStyles) => ({
                            ...baseStyles,
                            width: '12rem'
                        }),
                    }} />
                </div>
            </div>
            <Button>Cari</Button>
        </form>
    )
}

export default EventSearch;