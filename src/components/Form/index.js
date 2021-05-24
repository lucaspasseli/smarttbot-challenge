import * as S from "./style";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { registerSchema } from "../../helper/FormValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Paper from "../Paper";
import Icon from "../Icon";
import LogotipoSmarttBot from "../../assets/logotipoSmarttBot.png";
import { IoMdArrowDropleft } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [strategies, setStrategies] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [isReal, setIsReal] = useState(true);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    try {
      api.get("/strategy").then(({ data: { data } }) => setStrategies(data));
      api.get("/broker").then(({ data: { data } }) => setBrokers(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleForm = (data) => {
    api.post("/robot", data).then((response) => console.log(response));
    reset();
    history.push("/");
  };

  return (
    <div>
      <Icon icon={LogotipoSmarttBot} width="16rem" />
      <Paper>
        <S.Back onClick={() => history.goBack()}>
          <IoMdArrowDropleft /> Voltar
        </S.Back>
        <S.Form onSubmit={handleSubmit(handleForm)}>
          <S.Fieldset>
            <S.InputsWrap>
              <S.Message>
                {errors?.title?.message ||
                  errors?.initial_capital?.message ||
                  "Cadastre o seu robô :)"}
              </S.Message>
              <S.Label>Nome do Robô: </S.Label>
              <S.Input
                type="text"
                id="title"
                placeholder="ex: Megazord"
                {...register("title")}
              />

              <S.Label>Selecione sua estratégia:</S.Label>
              <S.Select
                name="Selecione estratégia"
                id="strategy_id"
                {...register("strategy_id")}
              >
                {strategies.map(({ id, name }) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ))}
              </S.Select>

              <S.Label>Capital inicial:</S.Label>
              <div>
                <span>R$ </span>
                <S.Input
                  type="number"
                  id="initial_capital"
                  placeholder="10"
                  {...register("initial_capital")}
                />
              </div>

              <S.Wrap>
                <S.Label>Selecionar Modo:</S.Label>
                <div>
                  {" "}
                  <S.Input
                    type="radio"
                    name="mode"
                    id="mode"
                    value="1"
                    defaultChecked
                    {...register("mode")}
                    onClick={() => !isReal && setIsReal(!isReal)}
                  />
                  <S.Label isHighlight>Modo Real</S.Label>
                  <S.Input
                    type="radio"
                    name="mode"
                    id="mode"
                    value="0"
                    {...register("mode")}
                    onClick={() => isReal && setIsReal(!isReal)}
                  />
                  <S.Label isHighlight>Modo Simulado</S.Label>
                </div>
              </S.Wrap>

              {!isReal && (
                <S.Wrap>
                  <S.Label>Escolher simulação</S.Label>
                  <div>
                    <S.Input
                      type="radio"
                      name="simulation"
                      id="0"
                      value="0"
                      checked
                      {...register("simulation")}
                    />
                    <S.Label isHighlight>Otimista</S.Label>
                    <S.Input
                      type="radio"
                      name="simulation"
                      id="1"
                      value="1"
                      {...register("simulation")}
                    />
                    <S.Label isHighlight>Pessimista</S.Label>
                  </div>
                </S.Wrap>
              )}
              {isReal && (
                <>
                  <S.Label>Seleciona sua corretora:</S.Label>
                  <S.Select
                    name="Selecione uma corretora"
                    id="broker_id"
                    {...register("broker_id")}
                  >
                    {brokers.map(({ id, name }) => (
                      <option value={id} key={id}>
                        {name}
                      </option>
                    ))}
                  </S.Select>
                </>
              )}
            </S.InputsWrap>
            <S.Button type="submit">Criar</S.Button>
          </S.Fieldset>
        </S.Form>
      </Paper>
    </div>
  );
};

export default Form;
