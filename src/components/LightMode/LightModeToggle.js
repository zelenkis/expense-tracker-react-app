
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

import './LightMode.css';
import './LightModeToggle.css';

function LightModeToggle(props) {
    //props is empty here coz we ain't passing anything
    const [checked, setChecked] = useState(true);

    props.viewModeToggleValue(checked);
    const toggleScreenMode = () => {
        const selectors = [
            '.app__title',
            '.expenses',
            '.expense-item',
            '.expense-item__price',
            '.card',
            '#container__light-mode-switch',
            '.new-expense',
            '.new-expense__actions',
            '.slider',
            'input:checked+.slider:before',
            '.fa-moon',
            'button',
            '.expenses-filter__control',
            '.expenses-filter',
            'option'
        ];

        if (checked) {
            console.log('SET LIGHT MODE');
            setChecked(false);
            selectors.forEach(function (selector) {
                addLightModeToSelector(selector);
            });
            document.body.classList.add('light-mode');
            document.querySelector('.fa-sun').style.opacity = '0';
            document.querySelector('.fa-moon').style.opacity = '1';

        } else {
            console.log('SET DARK MODE');
            setChecked(true);
            selectors.forEach(function (selector) {
                removeLightModeToSelector(selector);
            });
            document.body.classList.remove('light-mode');
            document.querySelector('.fa-sun').style.opacity = '1';
            document.querySelector('.fa-moon').style.opacity = '0';

        }

        function addLightModeToSelector(selectorName) {
            document.querySelectorAll(selectorName).forEach(function (selector) {
                selector.classList.add('light-mode');
            })
        }

        function removeLightModeToSelector(selectorName) {
            document.querySelectorAll(selectorName).forEach(function (selector) {
                selector.classList.remove('light-mode');
            })
        }
    }

    return (
        <div id='container__light-mode-switch'>
            <label className="switch">
                <input type="checkbox"
                    onChange={toggleScreenMode}
                    selected={checked}
                />
                <span className="slider"> <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} /></span>
            </label>

        </div>
    );
}

export default LightModeToggle;