// Home components

import React, { Component } from 'react';
import '../../styles/hero.css'


interface CarouselProps {
    items: string[]; 
    active: number;
}

interface CarouselState {
    items: string[]; 
    active: number;
    direction: string;
}

interface ItemProps {
    image: string;
    level: number;
    onClickLeft?: () => void; 
    onClickRight?: () => void; 
  }
  
  

class Carousel extends Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            items: props.items,
            active: props.active,
            direction: '',
        };
    }

    generateItems() {
        const items: JSX.Element[] = [];
        for (let i = this.state.active - 1; i <= this.state.active + 1; i++) {
          let index = i;
          if (i < 0) {
            index = this.state.items.length + i;
          } else if (i >= this.state.items.length) {
            index = i % this.state.items.length;
          }
          const level = i - this.state.active;
          items.push(
            // <Item
            //   key={index}
            //   image={this.state.items[index]}
            //   level={level}
            //   onClickLeft={this.moveLeft.bind(this)} // 传递 moveLeft 方法
            //   onClickRight={this.moveRight.bind(this)} // 传递 moveRight 方法
            // />
            <Item
        key={index}
        image={this.state.items[index]}
        level={level}
        onClick={() => {/* Add your onClick logic here */}}
        onClickLeft={this.moveLeft.bind(this)}
        onClickRight={this.moveRight.bind(this)}
      />
          );
        }
        return items;
      }
      

    handleItemClick(level: number) {
        if (level < 0) {
            this.moveLeft();
        } else if (level > 0) {
            this.moveRight();
        }
    }

    moveLeft() {
        const newActive = this.state.active;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive - 1,
            direction: 'left',
        });
    }

    moveRight() {
        const newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right',
        });
    }

    render() {
        return (
            <div id="carousel" className="noselect">
                {this.generateItems()}
            </div>
        );
    }
}

interface ItemProps {
    image: string;
    level: number;
    onClick: (level: number) => void;
}

class Item extends Component<ItemProps> {
    render() {
      const className = `item level${this.props.level}`;
      const isLeftItem = this.props.level < 0;
      const isRightItem = this.props.level > 0;
  
      return (
        <div
          className={className}
          onClick={() => {
            if (isLeftItem && this.props.onClickLeft) {
              this.props.onClickLeft();
            } else if (isRightItem && this.props.onClickRight) {
              this.props.onClickRight();
            }
          }}
        >
          <img src={this.props.image} alt= {'image'}  />
        </div>
      );
    }
  }
  
  

const items = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image3.jpg', 'image3.jpg'];

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='hero_container'>
                <div className='text_container'>
                    <div className='text_name_en'>CAC Onboarding</div>
                    <div className='text_name_ch'>QU<br />MaxhHao </div>
                    <div className='text_about_paragraph'>
                      My name is MaxHao and I'm the new intern at CAC. My Onboarding project is a trip planner. The goal is to plan
                      plan out the best route for a trip in a vacation. To save your time and release the last bit of your stress.
                    </div>
                </div>
                <div className='carousel_container'>
                    <Carousel items={items} active={0} />
                </div>
            </div>
        </div>
    )
}