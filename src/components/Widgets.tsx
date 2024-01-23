import { Search } from '@mui/icons-material'
import widgets from '../css/widgets.module.css'
function Widgets(){
    return (
        <div className={widgets.container}>
            <div className={widgets.widget_input}>
                <Search className={widgets.widget_searchIcon}/>
            </div>
        </div>
    )
}
export default Widgets