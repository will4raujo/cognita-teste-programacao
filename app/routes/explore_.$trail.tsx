import { ActionFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import React, { useEffect } from "react";
import {Form, useLoaderData, useNavigate} from "@remix-run/react";
import H1 from "../components/atoms/H1/H1";
import Button from "../components/atoms/Button/Button";
import InputText from "../components/atoms/InputText/InputText";
import TextArea from "../components/atoms/TextArea/TextArea";
import SubtitleWithText from "../components/molecules/SubTitleWithText/SubtitleWithText";
import Modal from "../components/organisms/Modal/Modal";
import {TrailService} from "../service/trail";


const trailService = new TrailService();

export const loader = ({ params }: LoaderFunctionArgs) => {
  return json({
    trail: trailService.getTrailById(params.trail || ""),
  });
}

export const action: ActionFunction = async ({ request }) => {
  const data = new URLSearchParams(await request.text());

  const step = trailService.createStep(data.get("trail") || "", {
    id: data.get("id") || "",
    title: data.get("title") || "",
    content: data.get("content") || "",
  });

  return json({ step });
};

export default function ExploreTrailPage() {
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();
    const handleAddStep = () => {
        setShowModal(true);
    };
    const handleOnBack = () => {
        navigate('/explore')
    };


    const data = useLoaderData<typeof loader>();

    useEffect(() => {
        if (!data.trail) {
            return
        }
        if (data.trail.steps.length > 0) {
            setShowModal(false);
        }
    }, [data]);

    if (!data.trail) {
        return null
    }

    return (
        <main className="max-w-[80rem] mx-auto relative mt-[8rem]">
            <div className="flex justify-between items-center mb-[4rem]">
                <H1>{data.trail.title}</H1>
                <Button onClick={handleAddStep}>+ Adicionar passo</Button>
            </div>
            <div className="flex flex-col gap-5">
                {data.trail.steps.map((step) => (
                    <SubtitleWithText
                        key={step.id}
                        subtitle={step.title}
                        text={step.content}
                    />
                ))}
            </div>
            {showModal && (
                <Modal isOpen={showModal}>
                    <Form className="modal-content-wrapper" method="post">
                        <H1>Adicionar passo</H1>

                        <div className="inputs-wrapper">
                            <input type="hidden" name="trail" value={data.trail.id} />
                            <InputText required label={"Id"} name={"id"} />
                            <InputText required label={"Título"} name={"title"} />
                            <TextArea required label={"Conteúdo"} name={"content"} />
                        </div>

                        <div className="action-buttons">
                            <Button style="ghost" onClick={() => setShowModal(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit">Adicionar</Button>
                        </div>
                    </Form>
                </Modal>
            )}
            <div  className="mt-4">
                <Button style="ghost" onClick={handleOnBack}> Voltar</Button>
            </div>
        </main>
    );
}
