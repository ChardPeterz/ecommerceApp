import React from "react";
import { Buttons } from "../../components/Buttons";
import { TypePrimaryStateWrapper } from "../../components/TypePrimaryStateWrapper";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { CardSecurity1 } from "../../icons/CardSecurity1";
import { Facebook1 } from "../../icons/Facebook1";
import { Instagram1 } from "../../icons/Instagram1";
import { MailOpened1 } from "../../icons/MailOpened1";
import { PrivacyPolicy1 } from "../../icons/PrivacyPolicy1";
import { Telegram1 } from "../../icons/Telegram1";
import { Twitter1 } from "../../icons/Twitter1";
import { UserStar1 } from "../../icons/UserStar1";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[1440px] h-[4168px] items-center gap-16 relative">
      <div className="flex w-[1440px] h-[691px] items-center justify-center gap-6 relative [background:linear-gradient(180deg,rgb(152.56,143.92,143.92)_0%,rgb(50.56,47.7,47.7)_92%)]">
        <div className="flex flex-col w-[560px] items-start gap-[var(--sizing-tokens-card-spacing-24)] relative">
          <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-16)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--sizing-tokens-card-spacing-24)] relative flex-[0_0_auto]">
              <img className="relative w-20 h-px" alt="Line" src="/img/line-4.svg" />
              <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-base-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                New
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-2">
              <p className="relative self-stretch font-h1-bold font-[number:var(--h1-bold-font-weight)] text-base-white text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] [font-style:var(--h1-bold-font-style)]">
                <span className="font-h1-bold font-[number:var(--h1-bold-font-weight)] text-white text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] [font-style:var(--h1-bold-font-style)]">
                  Classic
                  <br />
                </span>
              </p>
              <p className="relative self-stretch font-h1-bold font-[number:var(--h1-bold-font-weight)] text-base-white text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] [font-style:var(--h1-bold-font-style)]">
                <span className="font-h1-bold font-[number:var(--h1-bold-font-weight)] text-white text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] [font-style:var(--h1-bold-font-style)]">
                  Collection 1
                </span>
              </p>
            </div>
            <p className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-primitives-colors-orange-50 text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Lorem ipsum dolor sit amet consectetur. Elit mi mauris sit lacinia odio. Arcu nulla facilisis pretium
              laoreet arcu nec. Dictum eget est netus sit ligula nulla donec purus ultrices. Erat vitae proin eu
              bibendum enim.
            </p>
          </div>
          <Buttons
            className="!flex-[0_0_auto] !flex !bg-primitives-colors-orange-500 !w-[294px]"
            divClassName="!ml-[-4.00px]"
            icon="right"
            label="Explore Our Collection"
            override={<ArrowRight1 className="!relative !w-6 !h-6 !mr-[-4.00px]" color="#F6F7F8" />}
            pill={false}
            size="large"
            stateProp="default"
            type="primary"
          />
        </div>
        <div className="flex w-[577px] h-[574px] items-center justify-around relative">
          <img
            className="relative flex-1 self-stretch grow"
            alt="Mens nike tennessee"
            src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho.png"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-[66px] py-16 relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--primitives-colors-gray-200)]">
        <div className="flex items-center gap-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-16)] pl-0 py-0 relative flex-1 grow border-r-2 [border-right-style:solid] border-[color:var(--primitives-colors-gray-400)]">
          <Telegram1 className="!relative !w-14 !h-14" />
          <div className="w-[169.5px] flex flex-col h-[72px] items-start justify-center gap-[var(--sizing-tokens-card-spacing-8)] relative">
            <div className="relative self-stretch font-body-bold font-[number:var(--body-bold-font-weight)] text-style-tokens-greyscale-text-title text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
              Free Shipping
            </div>
            <div className="relative w-fit font-body-regular font-[number:var(--body-regular-font-weight)] text-style-tokens-greyscale-text-body text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
              on orders&nbsp;&nbsp;above&nbsp;&nbsp;$50
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-16)] pl-0 py-0 relative flex-1 grow border-r-2 [border-right-style:solid] border-[color:var(--primitives-colors-gray-400)]">
          <PrivacyPolicy1 className="!relative !w-14 !h-14" />
          <div className="flex flex-col h-[72px] items-start justify-center gap-[var(--sizing-tokens-card-spacing-8)] relative flex-1 grow">
            <div className="relative self-stretch font-body-bold font-[number:var(--body-bold-font-weight)] text-style-tokens-greyscale-text-title text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
              Return Policy
            </div>
            <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-style-tokens-greyscale-text-body text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              If product is damaged
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-16)] pl-0 py-0 relative flex-1 grow border-r-2 [border-right-style:solid] border-[color:var(--primitives-colors-gray-400)]">
          <CardSecurity1 className="!relative !w-14 !h-14" />
          <div className="flex flex-col h-[72px] items-start justify-center gap-[var(--sizing-tokens-card-spacing-8)] relative flex-1 grow">
            <div className="relative w-fit font-body-bold font-[number:var(--body-bold-font-weight)] text-style-tokens-greyscale-text-title text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Secure Payment
            </div>
            <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-style-tokens-greyscale-text-body text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              100% secure payment
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[var(--sizing-tokens-card-spacing-24)] relative flex-1 grow">
          <UserStar1 className="!relative !w-14 !h-14" />
          <div className="w-[185.5px] flex flex-col h-[72px] items-start justify-center gap-[var(--sizing-tokens-card-spacing-8)] relative">
            <div className="relative w-fit font-body-bold font-[number:var(--body-bold-font-weight)] text-style-tokens-greyscale-text-title text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Customer Support
            </div>
            <div className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-style-tokens-greyscale-text-body text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              24 Hour customer service
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--style-tokens-greyscale-surface-subtle)]">
          <div className="flex h-[574px] items-center justify-center relative flex-1 grow">
            <img
              className="self-stretch object-cover relative flex-1 grow"
              alt="Mens nike tennessee"
              src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho-1.png"
            />
          </div>
          <div className="flex h-[574px] items-center justify-center relative flex-1 grow">
            <img
              className="relative flex-1 self-stretch grow"
              alt="Mens nike tennessee"
              src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho-2.png"
            />
            <div className="inline-flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-16)] pt-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] pl-[var(--sizing-tokens-card-spacing-24)] absolute top-[404px] left-0">
              <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-8)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[97px] h-5">
                  <img className="absolute w-10 h-px top-2.5 left-0" alt="Line" src="/img/line-4-4.svg" />
                  <div className="absolute top-0 left-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                    Filter
                  </div>
                </div>
                <div className="relative w-[258px] font-h2-bold font-[number:var(--h2-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--h2-bold-font-size)] tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] [font-style:var(--h2-bold-font-style)]">
                  Catchy Text
                </div>
              </div>
              <Buttons
                className="!flex-[0_0_auto] !bg-primitives-colors-orange-500"
                icon="none"
                label="Discover"
                pill={false}
                size="small"
                stateProp="default"
                type="primary"
              />
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-16)] pt-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] pl-[var(--sizing-tokens-card-spacing-24)] absolute top-[404px] left-0">
            <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-8)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[97px] h-5">
                <img className="absolute w-10 h-px top-2.5 left-0" alt="Line" src="/img/line-4-4.svg" />
                <div className="absolute top-0 left-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                  Filter
                </div>
              </div>
              <div className="relative w-[258px] font-h2-bold font-[number:var(--h2-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--h2-bold-font-size)] tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] [font-style:var(--h2-bold-font-style)]">
                Catchy Text
              </div>
            </div>
            <Buttons
              className="!flex-[0_0_auto] !bg-primitives-colors-orange-500"
              icon="none"
              label="Discover"
              pill={false}
              size="small"
              stateProp="default"
              type="primary"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--style-tokens-greyscale-surface-subtle)]">
          <div className="flex items-center justify-center relative flex-1 grow">
            <img
              className="h-[574px] relative flex-1 grow"
              alt="Mens nike tennessee"
              src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho-3.png"
            />
          </div>
          <div className="flex items-center justify-center relative flex-1 grow">
            <img
              className="h-[574px] relative flex-1 grow"
              alt="Mens nike tennessee"
              src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho-4.png"
            />
            <div className="inline-flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-16)] pt-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] pl-[var(--sizing-tokens-card-spacing-24)] absolute top-[404px] left-0">
              <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-8)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[97px] h-5">
                  <img className="absolute w-10 h-px top-2.5 left-0" alt="Line" src="/img/line-4-4.svg" />
                  <div className="absolute top-0 left-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                    Filter
                  </div>
                </div>
                <div className="relative w-[258px] font-h2-bold font-[number:var(--h2-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--h2-bold-font-size)] tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] [font-style:var(--h2-bold-font-style)]">
                  Catchy Text
                </div>
              </div>
              <Buttons
                className="!flex-[0_0_auto] !bg-primitives-colors-orange-500"
                icon="none"
                label="Discover"
                pill={false}
                size="small"
                stateProp="default"
                type="primary"
              />
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-16)] pt-[var(--sizing-tokens-card-spacing-24)] pr-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] pl-[var(--sizing-tokens-card-spacing-24)] absolute top-[404px] left-0">
            <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-8)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[97px] h-5">
                <img className="absolute w-10 h-px top-2.5 left-0" alt="Line" src="/img/line-4-4.svg" />
                <div className="absolute top-0 left-[54px] font-body-bold font-[number:var(--body-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                  Filter
                </div>
              </div>
              <div className="relative w-[258px] font-h2-bold font-[number:var(--h2-bold-font-weight)] text-primitives-colors-base-white text-[length:var(--h2-bold-font-size)] tracking-[var(--h2-bold-letter-spacing)] leading-[var(--h2-bold-line-height)] [font-style:var(--h2-bold-font-style)]">
                Catchy Text
              </div>
            </div>
            <Buttons
              className="!flex-[0_0_auto] !bg-primitives-colors-orange-500"
              icon="none"
              label="Discover"
              pill={false}
              size="small"
              stateProp="default"
              type="primary"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 px-[66px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-h1-bold font-[number:var(--h1-bold-font-weight)] text-black text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] [font-style:var(--h1-bold-font-style)]">
          Shop By Style
        </div>
        <div className="flex items-start gap-[var(--sizing-tokens-card-spacing-24)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 grow h-[352px] bg-[url(/static/img/frame-39.png)] bg-cover bg-[50%_50%]" />
          <div className="relative flex-1 grow h-[352px] bg-[url(/static/img/frame-42.png)] bg-cover bg-[50%_50%]" />
          <div className="relative flex-1 grow h-[352px] bg-[url(/static/img/frame-41.png)] bg-cover bg-[50%_50%]" />
          <div className="relative flex-1 grow h-[352px] bg-[url(/static/img/frame-40.png)] bg-cover bg-[50%_50%]" />
          <div className="relative flex-1 grow h-[352px] bg-[url(/static/img/frame-43.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="h-[574px] relative flex-1 grow"
            alt="Mens nike tennessee"
            src="/img/mens-nike-tennessee-orange-tennessee-volunteers-club-pullover-ho-5.png"
          />
          <div className="flex flex-col w-[788px] items-center gap-6 absolute top-[182px] left-[326px]">
            <div className="relative w-fit mt-[-1.00px] font-h1-bold font-[number:var(--h1-bold-font-weight)] text-[color:var(--primitives-colors-gray-50)] text-[length:var(--h1-bold-font-size)] tracking-[var(--h1-bold-letter-spacing)] leading-[var(--h1-bold-line-height)] whitespace-nowrap [font-style:var(--h1-bold-font-style)]">
              Hoodies For Every Occastion
            </div>
            <p className="relative self-stretch font-headline-regular font-[number:var(--headline-regular-font-weight)] text-[color:var(--primitives-colors-gray-50)] text-[length:var(--headline-regular-font-size)] text-center tracking-[var(--headline-regular-letter-spacing)] leading-[var(--headline-regular-line-height)] [font-style:var(--headline-regular-font-style)]">
              Lorem ipsum dolor sit amet consectetur. Elit mi mauris sit lacinia odio. Arcu nulla facilisis pretium
              laoreet arcu nec. Dictum
            </p>
            <Buttons
              className="!flex-[0_0_auto] !bg-primitives-colors-orange-500"
              icon="none"
              label="Browse our Collection"
              pill={false}
              size="large"
              stateProp="default"
              type="primary"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[50px] pt-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] px-[75px] relative self-stretch w-full flex-[0_0_auto] bg-primitives-colors-orange-50">
          <div className="inline-flex items-center gap-[var(--sizing-tokens-card-spacing-24)] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Featured
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Men
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Women
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Children
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 px-0 py-16 relative self-stretch w-full flex-[0_0_auto] bg-primitives-colors-orange-300">
          <div className="inline-flex items-center gap-[var(--sizing-tokens-card-spacing-24)] relative flex-[0_0_auto]">
            <MailOpened1 className="!relative !w-14 !h-14" />
            <div className="relative w-fit font-h3-regular font-[number:var(--h3-regular-font-weight)] text-style-tokens-greyscale-text-title text-[length:var(--h3-regular-font-size)] tracking-[var(--h3-regular-letter-spacing)] leading-[var(--h3-regular-line-height)] whitespace-nowrap [font-style:var(--h3-regular-font-style)]">
              Subsribe to Newsletter
            </div>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div
              className="flex-col w-[375px] items-start flex gap-[var(--component-tokens-input-fields-spacing)] relative"
              data-semantic-colors-mode="primary"
            >
              <div className="flex flex-col items-start gap-[var(--sizing-tokens-card-spacing-8)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-center pt-[var(--sizing-tokens-card-spacing-16)] pr-[var(--sizing-tokens-card-spacing-16)] pb-[var(--sizing-tokens-card-spacing-16)] pl-[var(--sizing-tokens-card-spacing-16)] self-stretch w-full flex-[0_0_auto] bg-primitives-colors-base-white rounded-[var(--sizing-tokens-radius-MD)_0px_0px_var(--sizing-tokens-radius-MD)] border-2 border-solid border-primitives-colors-orange-500 flex gap-[var(--sizing-tokens-card-spacing-8)] relative">
                  <div className="flex items-center gap-[var(--component-tokens-input-fields-spacing)] relative flex-1 grow">
                    <input
                      className="inline-flex items-center gap-[var(--component-tokens-input-fields-spacing)] relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] font-caption-bold font-[number:var(--caption-bold-font-weight)] text-primitives-colors-gray-300 text-[length:var(--caption-bold-font-size)] tracking-[var(--caption-bold-letter-spacing)] leading-[var(--caption-bold-line-height)] [font-style:var(--caption-bold-font-style)] p-0"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="relative flex-[0_0_auto] gap-[var(--component-tokens-input-fields-spacing)]" />
                </div>
              </div>
            </div>
            <Buttons
              className="!rounded-[0px_var(--sizing-tokens-radius-MD)_var(--sizing-tokens-radius-MD)_0px] !flex-[0_0_auto] !bg-primitives-colors-orange-500"
              icon="right"
              label="Subscribe"
              override={<ArrowRight1 className="!relative !w-6 !h-6" color="#F6F7F8" />}
              pill={false}
              size="large"
              stateProp="default"
              type="primary"
            />
          </div>
        </div>
        <div className="flex h-[82px] items-center justify-between pt-[var(--sizing-tokens-card-spacing-24)] pb-[var(--sizing-tokens-card-spacing-24)] px-[66px] relative self-stretch w-full bg-primitives-colors-orange-400">
          <div className="inline-flex items-start justify-center gap-6 relative flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px]">
            <TypePrimaryStateWrapper
              className="!flex !bg-primitives-colors-orange-500 !w-11"
              icon="only"
              override={<Facebook1 className="!relative !w-5 !h-5" />}
              pill={false}
              size="medium"
              stateProp="default"
              type="primary"
            />
            <TypePrimaryStateWrapper
              className="!flex !bg-primitives-colors-orange-500 !w-11"
              icon="only"
              override={<Twitter1 className="!relative !w-5 !h-5" />}
              pill={false}
              size="medium"
              stateProp="default"
              type="primary"
            />
            <TypePrimaryStateWrapper
              className="!flex !bg-primitives-colors-orange-500 !w-11"
              icon="only"
              override={<Instagram1 className="!relative !w-5 !h-5" />}
              pill={false}
              size="medium"
              stateProp="default"
              type="primary"
            />
          </div>
          <p className="relative w-fit font-body-regular font-[number:var(--body-regular-font-weight)] text-black text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
            All Rights Reserved, Colabs 2024
          </p>
          <div className="relative w-[432px] h-[31px]">
            <Buttons
              className="!absolute !left-0 !bg-[unset] !top-0"
              divClassNameOverride="!text-style-tokens-greyscale-text-title"
              icon="none"
              label="Privacy Policy"
              pill={false}
              size="small"
              stateProp="default"
              type="primary"
            />
            <Buttons
              className="!absolute !left-[142px] !bg-[unset] !top-0"
              divClassNameOverride="!text-style-tokens-greyscale-text-title"
              icon="none"
              label="Terms &amp; Conditions"
              pill={false}
              size="small"
              stateProp="default"
              type="primary"
            />
            <Buttons
              className="!absolute !left-[317px] !bg-[unset] !top-0"
              divClassNameOverride="!text-style-tokens-greyscale-text-title"
              icon="none"
              label="Refund Policy"
              pill={false}
              size="small"
              stateProp="default"
              type="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
