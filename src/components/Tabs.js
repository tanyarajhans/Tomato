import { TabItem } from "./TabItem";

export const Tabs = ({ list, activeTab, onTabSwitch }) => {
    let active = activeTab === '' ? list[0] : activeTab;
    return (
        <div className="sticky z-1900 bg-white">
            <div className="container mx-auto flex align-center py-2 border-b-gray-400">
                {list.map((item, index) => {
                    return (
                        <TabItem
                            title = {item}
                            key = {index}
                            index = {index}
                            active = {active === item} //boolean value, if true tab gets highled by border bottom yellow
                            setActive = {onTabSwitch}
                        />
                    )
                })}
            </div>
        </div>
    )
}