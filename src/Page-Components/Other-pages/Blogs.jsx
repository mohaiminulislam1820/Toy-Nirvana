import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto my-16'>

            <h1 className='text-4xl font-bold text-center mb-10'>Blog</h1>

            <p className='mb-2 text-gray-500'> Q : What is an access token and refresh token? How do they work and where should we store them on the client-side? </p>
            <p className='mb-6 text-slate-800 font-medium'>Answer : An access token is a token that grants access to a protected resource, such as an API. It is usually issued by an authorization server and used by a client app to authenticate requests to the resource server and usually valid for a short time.
                A refresh token is a token that is used to obtain a new access token when the current access token expires. It is typically issued alongside the access token and is valid for a long time.
                They should be stored in HTTP-only cookies or in-memory JavaScript variable.
            </p>

            <p className='mb-2 text-gray-500'> Q : Compare SQL and NoSQL databases? </p>
            <p className='mb-2 text-slate-800 font-medium'>Answer :  SQL databases are relational databases and NoSQL databases are non-relational databases.  </p>
            <table className='border'>
                <thead className='border'>
                    <tr>
                        <th className='p-1'>Feature</th>
                        <th>SQL database</th>
                        <th>NoSQL database</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className='border'>
                        <td className='p-1'>Data Storage</td>
                        <td>Tables</td>
                        <td>Documents, key-value-pairs,graphs</td>
                    </tr>

                    <tr className='border'>
                        <td className='p-1'>Relationships</td>
                        <td>Foreign keys</td>
                        <td>None or ad hoc</td>
                    </tr>

                    <tr className='border'>
                        <td className='p-1'>Data Types</td>
                        <td>Fixed</td>
                        <td>Variable</td>
                    </tr>

                    <tr className='border'>
                        <td className='p-1'>Query language</td>
                        <td>SQL</td>
                        <td>NoSQL specific query language</td>
                    </tr>

                    <tr className='border'>
                        <td className='p-1'>Scalablity</td>
                        <td>Vertical</td>
                        <td>Horizontal</td>
                    </tr>

                </tbody>
            </table>

            <p className='mb-2 mt-6 text-gray-500'> Q : What is express js? What is Nest JS? </p>
            <p className='mb-6 text-slate-800 font-medium'>Answer : Express js is a minimal and flexible Node js framework that provides a robust set of features for building scalable web applications.
                Nest js is framework built on top of Express js and provides a number of additional features, such as dependency injection, routing and ORM support. It is preferrable for building enterprise level applications. </p>

            <p className='mb-2 text-gray-500'> Q : What is MongoDB aggregate and how does it work ? </p>
            <p className='mb-6 text-slate-800 font-medium'>Answer :
                MongoDB aggregate is a feature of MongoDB that allows us to perform complex operations on our data. Aggregate operations are performed using a pipeline, which is a sequence of stages that are applied to the data in order. Each stage performs an operation on the data, and the results of the operation are passed to the next stage in the pipeline. </p>

        </div>
    );
};

export default Blogs;