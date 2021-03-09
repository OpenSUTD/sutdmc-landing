import React, { useState, useLayoutEffect, useEffect,useContext,useRef } from "react";
import ReactCompareImage from "react-compare-image";
import PageHeader from "../components/PageHeader";
// import PageBanner from "../components/PageBanner";
import PageBase from "../components/PageBase";
import CTAbtn from "../components/CTAbtn";
import styled from "styled-components";
import details from "../content/Gen_img_path/details.json";
import { MiningContext } from "../Context";
import InstructionComp from "../components/InstructionComp";
import Text from "../components/Text";
import CTA from "../components/CTA";

function Campus(props) {
  const location = []
  const setMining = useContext(MiningContext);
  const [size, setSize] = useState(0);
  const [expand,setExpand] = useState(false);
  const [imgLink, setImgLink] = useState();
  const [type,setType] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpand(false)
    }
  }

  useEffect(() => {

    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])
  useLayoutEffect(() => {
    function updateSize() {
      const width = document.getElementsByClassName('Preview').offsetWidth
      console.log(width)
      setSize(width/16*9);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  for (const place in details) {
    location.push(place)
  }
  const change =(state)=>{
    setType(state)
  }

  const imgClick =(path)=>{
    setExpand(!expand)
    setImgLink(path)
  }
  const BtnWraper = styled.div`
    width: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const InstructionWrapper = styled.div`
    width: auto;
    height: auto;
  `
  const Gallery = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    width:auto;
    height:auto;
    
  `
  const Preview = styled.div`
    margin-top:3rem;
    width:40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    
    &:hover {
      cursor: none;
      transform: scale(1.1);

    }
    display: inline-block;
    transition-property: transform;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  
  `
  const PreviewImg = styled.img`
    width:100%;
    height: ${
      size
    }px;
    border-radius:0.5rem;
    margin-bottom: 1rem;
   
    @media (max-width: 896px) {
      margin: 1rem;
    }
    @media (max-width: 576px) {
      margin: .5rem;
    }
    
  `
  const FullImgBg = styled.div`
    height:100vh;
    width: 100vw;
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(50px);
    z-index: 999;
  `
  const FullImg = styled.div`
    
    position:relative;
    height: auto;
    width: 80%;
    animation:fadeIn .5s ease-in;
    @keyframes fadeIn {
      from {
        width: 20%;
        opacity:0;
      }
      to {
        width: 80%;
        opacity:1;
      }
    }
  `

  return (

    <PageBase>
      {expand&&<FullImgBg>
        <FullImg ref={ref} >
            <ReactCompareImage
              leftImage={require(`../assets/images/before-after/${imgLink}.jpg`)}
              rightImage={require(`../assets/images/before-after/${imgLink}.png`)}
              sliderLineColor="var(--color-accent)"
            />
          <Text style={{position:'absolute',bottom:'1rem',left:'1rem'}}>{imgLink}</Text>

        </FullImg>
      </FullImgBg>}
      <PageHeader>SUTD MINECRAFT</PageHeader>
      {/* <PageBanner></PageBanner> */}
      <BtnWraper>

        <CTAbtn selectUserType={()=>{change(true)}}>View in Minecraft</CTAbtn>
        <CTA href={'https://sutdmc-map.opensutd.org/open_house/?worldname=open_house&mapname=iso_ne&zoom=4&x=-101&y=64&z=35'} style={{margin:'10px'}} target={'_blank'}>View in Browser</CTA>
        {/* <CTAbtn selectUserType={()=>{change(false)}}>View Photos</CTAbtn> */}
      </BtnWraper>
      {type ?
        <InstructionWrapper>

          <InstructionComp stepNum={1}>
            <Text>Purchase a copy of Minecraft Java Edition from Mojang's website.</Text>
            <CTA href={'https://www.minecraft.net/en-us/store/minecraft-java-edition/'} target={'_blank'}>Download</CTA>
          </InstructionComp>
          <InstructionComp stepNum={2}>
            <Text>Download Minecraft Java Edition and open the launcher. Login with your account, and select 1.16.5 as the game version. </Text>
          </InstructionComp>
          <InstructionComp stepNum={3}>
            <Text>Select Multiplayer in the Main Menu </Text>
          </InstructionComp>
          <InstructionComp stepNum={4}>
            <Text>Press on Add Server</Text>
          </InstructionComp>
          <InstructionComp stepNum={5}>
            <Text>Enter the following details</Text>
            {/*<Text>Server Name: SUTD Minecraft</Text>*/}
            {/*<Text>Server Address: game.sutdmc.opensutd.org</Text>*/}
          </InstructionComp>
          <InstructionComp stepNum={6}>
            <Text>Press Done and return back to the Multiplayer menu. Double click on SUTD Minecraft to join our server network. </Text>
          </InstructionComp>
          <InstructionComp stepNum={7}>
            <Text>Welcome to the server network! Head straight into the building to find portals to our individual servers.</Text>
          </InstructionComp>
          <InstructionComp stepNum={8}>
            <Text>The portal to the SUTD campus is on the right. Walk through it to be teleported to SUTD. </Text>
          </InstructionComp>
          <InstructionComp stepNum={9}>
            <Text>Welcome to SUTD! </Text>
          </InstructionComp>
        </InstructionWrapper>


        :
        <Gallery>
          {location.map((place, index) => {

            return(
              <Preview>
                <PreviewImg key ={index} className={'Preview'}
                            src = {require(`../assets/images/before-after/${place}.png`)}
                            onMouseEnter={() => setMining(true)}
                            onMouseLeave={() => setMining(false)}
                            onClick = {()=>{imgClick(place)}}
                            ></PreviewImg>
                <Text style={{position:'absolute',bottom:'1rem',left:'1rem'}}>{place}</Text>
              </Preview>
            )

          })}


        </Gallery>
      }

    </PageBase>

  );
}

export default Campus;