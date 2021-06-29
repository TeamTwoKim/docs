import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as TypeormIcon } from "../../assets/typeorm.svg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #212121;
  width: 100%;
  height: 100%;
  color: white;
`;

const Wrapper = styled.div`
  padding: 20px 50px;
`;

const TopTap = styled.div`
  height: 32px;
`;

const TopTapItem = styled.div`
  height: 100%;
  width: 130px;
  border-bottom: 2px solid rgb(128, 203, 196);
  font-size: 14px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  position: relative;
`;

const Close = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 11px;
  cursor: pointer;
`;

const source = `
# Typeorm   


## Typeorm find Option

모든 Repository 및 \`find\` 관리는 \`QueryBuilder\`를 사용하지 않고 필요한 데이터를 쿼리하는데 사용할 수 있는 특수 옵션을 허용합니다.

 - \`select\` - 선택해야되는 메인 객체의 속성을 나타냅니다.

 
 \`\`\`javascript
 userRepository.find({ select: ["firstName", "lastName"] })
 \`\`\`

 - \`relation\` - 관계는 기본 엔티티와 함께 로드되어야합니다. 하위 관계도 로드 할 수 있습니다 (join 및 leftJoinAndSelect의 약어).

 \`\`\`javascript
 userRepository.find({ relation: ["profile", "photos", "videos"] })
 userRepository.find({ relation: ["profile", "photos", "videos", "videos.videos_atttributes"] })
 \`\`\`

 - \`join\` - 엔터티에 대해 조인을 수행해야합니다. "관계"의 확장 버전.

 \`\`\`javascript
 userRepository.find({
  join: {
      alias: "user",
      leftJoinAndSelect: {
          profile: "user.profile",
          photo: "user.photos",
          video: "user.videos"
      }
    }
  });
 \`\`\`
`;

function Typeorm({ xclick }) {
  return (
    <Container>
      <TopTap>
        <TopTapItem>
          <TypeormIcon width={16} height={16} style={{ marginLeft: 10 }} />
          <span>Typeorm</span>
          <Close icon={faTimes} onClick={xclick} />
        </TopTapItem>
      </TopTap>
      <Wrapper>
        <MDEditor.Markdown source={source} />
      </Wrapper>
    </Container>
  );
}

export default Typeorm;
