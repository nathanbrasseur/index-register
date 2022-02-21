import React from 'react';
import {
    Form,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';

export default function ElectricityAddForm() {
    return (
        <Form
            layout="horizontal"
        >
            <Form.Item
                label="Valeur du compteur de jour"
                rules={[{
                    required: true,
                    message: 'Introduisez le relevé du compteur de jour',
                    type: 'number', min: 0
                }]}>
                <InputNumber /> kW
            </Form.Item>
            <Form.Item
                label="Valeur du compteur de nuit"
                rules={[{
                    required: true,
                    message: 'Introduisez le relevé du compteur de nuit',
                    type: 'number', min: 0
                }]}>
                <InputNumber /> kW
            </Form.Item>
            <Form.Item
                rules={[{ required: true, message: 'Sélectionnez le mois' }]}
                label="Mois du relevé">
                <Select>
                    <Select.Option value="1">Janvier</Select.Option>
                    <Select.Option value="2">Février</Select.Option>
                    <Select.Option value="3">Mars</Select.Option>
                    <Select.Option value="4">Avril</Select.Option>
                    <Select.Option value="5">Mai</Select.Option>
                    <Select.Option value="6">Juin</Select.Option>
                    <Select.Option value="7">Juillet</Select.Option>
                    <Select.Option value="8">Août</Select.Option>
                    <Select.Option value="9">Septembre</Select.Option>
                    <Select.Option value="10">Octobre</Select.Option>
                    <Select.Option value="11">Novembre</Select.Option>
                    <Select.Option value="12">Décembre</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                rules={[{ required: true, message: 'Sélectionnez la date de relevé' }]}
                label="Date de relevé">
                <DatePicker />
            </Form.Item>
        </Form>
    );
};