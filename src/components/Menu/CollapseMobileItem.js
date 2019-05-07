import React, { Component } from "react";
import PropTypes from "prop-types";


class CollapseMobileItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, isHide: true };
  }

  toggleList = () => {
    this.setState({
      isActive: !this.state.isActive
    });

    this.state.isHide
      ? this.setState({
          isHide: !this.state.isHide
        })
      : setTimeout(
          function() {
            this.setState({
              isHide: !this.state.isHide
            });
          }.bind(this),
          300
        );
  };

  render() {
    const { item: { label, subitems } = {} } = this.props;

    return (
      <React.Fragment>
        <li className={"hiddenItem" in this.props ? "hiddenItem" : "collapseItem"} key={label}>
          <div>
            <span className={`${this.state.isActive ? "rotate" : ""}`} onClick={this.toggleList}>
              {label}
            </span>
          </div>
          <div>
            <ul
              className={`${this.state.isActive ? "active" : ""} ${
                this.state.isHide ? "hide" : ""
              }`}
            >
              {subitems.map(item => (
                <li>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* --- STYLES --- */}
        <style jsx>{`
          
            

          .collapseItem {
            display: block;

            :global(a) {
                font-size: 20px;
                line-height: 26px;
                color: #434343;
                opacity: 0.6;
                margin-bottom: 5px;
                font-weight: 400;
              }

            :global(span) {
              color: #434343 !important;
              cursor: pointer;
              font-size: 28px;
              font-weight: 300;
              line-height: 36px !important;
              margin-bottom: 20px;
              line-height: 0.03em;
              transition: 0.2s;
              opacity: 0.6;
            }

            :global(.homepage):not(.fixed) & :global(span) {
              color: #434343 !important;
              cursor: pointer;
              font-size: 28px;
              font-weight: 300;
              line-height: 36px !important;
              margin-bottom: 20px;
              line-height: 0.03em;
              transition: 0.2s;
              opacity: 0.6;
            }
            :hover {
              opacity: 0.7;
            }

            span {
              cursor: pointer;
            }
            ul {
              display: block;
              position: relative;
              opacity: 0;
              transition: 0.3s;
              list-style-type: none;
              display: inline-block;
              

              &.active {
                opacity: 1;
                margin-bottom: 20px;
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

            .rotate {
              :global(svg) {
                transform: rotate(180deg);
              }
            }

            :global(svg) {
              margin-left: 10px;
            }

            :global(.itemList .hideItem) {
              display: none;
            }

            @from-width desktop {
              .item {
                :global(a) {
                  color: #434343;
                  font-weight: 600;
                  padding: 0 20px;
                  font-size: 14px;
                  margin-bottom: 5px;
                }

                :global(.homepage):not(.fixed) & :global(a) {
                }

                :global(a:hover) {
                  opacity: 0.7;
                }

                &:hover :global(svg) {
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
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

CollapseMobileItem.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.func
};

export default CollapseMobileItem;
