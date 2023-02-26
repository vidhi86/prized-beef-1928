import React, { Component } from "react";
import Slider from "react-slick";
import {Image} from "@chakra-ui/react"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="	https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thfeb1676965740208.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/merchf_wtrend40_hp_default_trend_setting_styles1677003214329.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/spring_babyhug_mega_combo_fest_hp1675840398685.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/slurrpfarm_hp_mkt_po3_all_2_slur401676005180412.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_nursery_22ndfeb1676981013138.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/wpc_the_self_care_carnival_4th_nov_22_hp1676970390139.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p04_wow_deal_spr_desktop1675773465026.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/haus&kinder_hp_mkt_po3_all_haus601676986899673.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_spr_desktop1676960793098.jpg"
              alt="image"
            />
          </div>
          <div>
            <Image margin="auto"
              width="90%" 
              height={"400px"}
              src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_gbbs_22stfeb1676984604807.gif"
              alt="image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
