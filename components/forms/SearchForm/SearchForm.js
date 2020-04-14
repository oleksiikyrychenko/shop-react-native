import React from 'react';
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { searchProducts } from 'store/products/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchGlass from 'components/svgIcons/SearchGlass';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    search: yup.string().required('Search is required!')
});

const Input =  styled.TextInput`
background-color: #BF0B0A;
padding: 10px 24px;
color: #fff;
`;

const SearchForm = ({ searchProducts }) => {
    const onSubmit = ({ search }) => {
        searchProducts(search);
    };

    return (
        <View>
            <Formik
                onSubmit={onSubmit}
                initialValues={{ search: '' }}
                validationSchema={validationSchema}
            >
                {({handleSubmit, handleChange}) => (
                    <View style={{ position: 'relative' }}>
                        <Input
                            name={'search'}
                            placeholder={'Search'}
                            onChangeText={handleChange('search')}
                            placeholderTextColor="#fff"
                        />
                        <View style={{ position: 'absolute', right: 40, top: 10 }}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <SearchGlass />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </ Formik>
        </View>
    );
};


SearchForm.propTypes = {
    productsList: PropTypes.func
};

export default connect(null, { searchProducts })(SearchForm);
