import React, {Component} from "react";
import PropTypes from "prop-types";


class CollapseItem extends Component {

    constructor(props) {
        super(props);
        this.state = {isActive: false, isHide: true };
    }

    toggleList = () => {
        this.setState({
            isActive: !this.state.isActive
        });
        
        this.state.isHide ?

        this.setState({
            isHide: !this.state.isHide
        })
        
        :

        setTimeout(
            function() {
                this.setState({
                    isHide: !this.state.isHide
                });
            }
            .bind(this),
        300)
    }

    render() {
        const { theme, item: { label, icon: Icon, subitems } = {} } = this.props;

        return (
            <React.Fragment>
            <li className={"hiddenItem" in this.props ? "hiddenItem" : "collapseItem"} key={label}>
                <span onClick={this.toggleList}>{label}</span> 
                
                    <ul className={`${this.state.isActive ? 'active' : ''} ${this.state.isHide ? 'hide' : '' }`}>
                        {subitems.map(item => (
                            <li><a href={'/services/#' + item.link }>{item.text}</a></li>
                        ))}
                    </ul>
            </li>

            {/* --- STYLES --- */}
            <style jsx>{`
            .collapseItem {
                
                    :global(span) {
                        color: #434343;
                        font-size: 14px;
                        font-weight: 600;
                        padding: 0 20px;
                        transition: .2s;
                    }

                    :global(.homepage):not(.fixed) & :global(span) {
                    color: #434343;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 0 20px;
                    transition: .2s;

                    }
                    :hover {
                        opacity: .7;
                    }
                    
                span {
                    cursor: pointer;
                }
                ul {
                    position: absolute;
                    top: 30px;
                    opacity: 0;
                    transition: .3s;
                    list-style-type: none;
                    display:inline-block;
                    
                    &.active {
                        opacity: 1;
                    }

                    &.hide {
                        li {
                        display: none;
                        }
                    }

                    li {
                        cursor: pointer;
                    }  
                }
            }
                .collapseItem,
                .showItem {
                background: transparent;
                transition: all ${theme.time.duration.default};
                display: flex;
                align-items: center;

                :global(a) {
                    padding: ${theme.space.inset.s};
                    display: flex;
                    align-items: center;
                }

                :global(svg) {
                    margin: 0 ${theme.space.inset.xs} 0 0;
                    opacity: 0.3;
                }
                }

                :global(.itemList .hideItem) {
                display: none;
                }

                @from-width desktop {
                .item {
                    :global(a) {
                    color: #434343;
                    padding: ${theme.space.inset.s};
                    transition: all ${theme.time.duration.default};
                    border-radius: ${theme.size.radius.small};
                    font-weight: 600;
                    padding: 0 20px;
                    font-size: 14px;
                    }

                    :global(.homepage):not(.fixed) & :global(a) {
                    color: ${theme.color.neutral.black};
                    }

                    :global(a:hover) {
                    opacity: 0.7;
                    }

                    :global(svg) {
                    transition: all ${theme.time.duration.default};
                    }

                    &:hover :global(svg) {
                    fill: ${theme.color.brand.primary};
                    opacity: 1;

                    :global(.hero) & :global(svg) {
                        fill: green;
                    }
                    }
                }

                .showItem {
                    display: none;
                }

                .hiddenItem {
                    text-align: left;
                    padding: ${theme.space.xs};

                    & :global(a.inHiddenItem) {
                    color: ${theme.text.color.primary};
                    &:hover {
                        color: ${theme.color.brand.primary};
                    }
                    }
                }
                }
            `}</style>
            </React.Fragment>
        );
    }
}

CollapseItem.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  theme: PropTypes.object.isRequired
};

export default CollapseItem;
