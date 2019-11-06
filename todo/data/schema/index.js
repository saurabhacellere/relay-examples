// @flow
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {GraphQLObjectType, GraphQLSchema} from 'graphql';

import {nodeField} from './nodes.js';
import {UserQuery} from './queries/UserQuery';
import {AddPlainTodoMutation} from './mutations/AddPlainTodoMutation';
import {AddBoldTodoMutation} from './mutations/AddBoldTodoMutation';
import {ChangeTodoStatusMutation} from './mutations/ChangeTodoStatusMutation';
import {MarkAllTodosMutation} from './mutations/MarkAllTodosMutation';
import {RemoveCompletedTodosMutation} from './mutations/RemoveCompletedTodosMutation';
import {RemoveTodoMutation} from './mutations/RemoveTodoMutation';
import {UpdatePlainContentDataMutation} from './mutations/UpdatePlainContentDataMutation';
import {UpdateBoldContentDataMutation} from './mutations/UpdateBoldContentDataMutation';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    node: nodeField,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPlainTodo: AddPlainTodoMutation,
    addBoldTodo: AddBoldTodoMutation,
    changeTodoStatus: ChangeTodoStatusMutation,
    markAllTodos: MarkAllTodosMutation,
    removeCompletedTodos: RemoveCompletedTodosMutation,
    removeTodo: RemoveTodoMutation,
    updatePlainContentData: UpdatePlainContentDataMutation,
    updateBoldContentData: UpdateBoldContentDataMutation,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
