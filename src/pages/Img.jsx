import { questions } from "../data/img";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export function Img() {

    const url = useParams();
    const navigate = useNavigate()
    const index = url.imgId;
    const q = questions[index];
    const length = questions.length;

    const answer = () => {
        const img = document.getElementById('imgQuest');
        img.src = q.reponse;

        document.getElementById('buttonAnswer').style.display = "none";



        if (Number(index) + 1 !== length) {
            document.getElementById('nextQcm').style.display = "block";
        }

    }
    const nextQuestion = () => {
        document.getElementById('buttonAnswer').style.display = "block";
        document.getElementById('nextQcm').style.display = "none";

        navigate("/image/" + (Number(index) + Number(1)));
    }

    return (
        <div id="imgQuestion">
            <div className="blockImgQuest">
                <img src={q.img} id="imgQuest" alt="A" />
            </div>
            <div className='button'>
                <button onClick={answer} id="buttonAnswer">Réponse</button>
                <button onClick={nextQuestion} id="nextQcm">next</button>
            </div>

            <p className="counter">
                {Number(index) + 1}/{length}
            </p>
        </div>
    )
}