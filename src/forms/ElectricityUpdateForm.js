import React from 'react';
import {
    Form,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import moment from 'moment';

export default function ElectricityUpdateForm() {
    return (
        <Form
            layout="horizontal" 
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 14 }}>
            <Form.Item
                label="Valeur du compteur de jour"
                required
                rules={[{
                    required: true,
                    message: 'Introduisez le relevé du compteur de jour',
                    type: 'number', min: 0
                }]}>
                <InputNumber
                    defaultValue={0}
                    addonAfter={'kW'}
                />
            </Form.Item>
            <Form.Item
                label="Valeur du compteur de nuit"
                required
                rules={[{
                    required: true,
                    message: 'Introduisez le relevé du compteur de nuit',
                    type: 'number',
                    min: 0
                }]}>
                <InputNumber
                    defaultValue={0}
                    addonAfter={'kW'}
                />
            </Form.Item>
            <Form.Item
                rules={[{ required: true, message: 'Sélectionnez le mois' }]}
                label="Mois du relevé"
                required>
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
                label="Date de relevé"
                required>
                <DatePicker
                    defaultValue={moment()} 
                    format={'DD/MM/YYYY'}
                 />
            </Form.Item>
        </Form>
    );
};